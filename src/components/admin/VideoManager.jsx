import { useEffect, useState } from "react"

import {
  deleteInstruction,
  getInstructions,
  uploadInstruction
} from "../../api/instructions"

import "./VideoManager.css"

function VideoManager({ apartmentId }) {
  const [videos, setVideos] = useState([])
  const [title, setTitle] = useState("")
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function reloadVideos() {
    const data = await getInstructions(apartmentId)
    setVideos(data)
  }

  useEffect(() => {
    if (!apartmentId) return
    reloadVideos()
  }, [apartmentId])

  async function addVideo(event) {
    event.preventDefault()

    if (!file) {
      setError("Выберите видеофайл")
      return
    }

    setLoading(true)
    setError("")

    const result = await uploadInstruction(file, apartmentId, title)

    setLoading(false)

    if (result.error) {
      setError(result.error.message || "Не удалось загрузить видео")
      return
    }

    setTitle("")
    setFile(null)
    event.target.reset()
    await reloadVideos()
  }

  async function removeVideo(id) {
    const confirmed = window.confirm("Удалить это видео?")
    if (!confirmed) return

    const success = await deleteInstruction(id)
    if (!success) {
      setError("Не удалось удалить видео")
      return
    }

    await reloadVideos()
  }

  return (
    <div className="video-manager">
      <h3>
        Видеоинструкции
      </h3>

      <p className="video-hint">
        Добавьте короткие ролики: телевизор, душ, кондиционер и другие подсказки для гостей.
      </p>

      <form className="video-form" onSubmit={addVideo}>
        <input
          type="text"
          placeholder="Название (например, Телевизор)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          accept="video/mp4,video/webm,video/quicktime"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Загрузка..." : "Добавить видео"}
        </button>
      </form>

      {error && (
        <p className="video-error">
          {error}
        </p>
      )}

      <div className="video-list">
        {videos.map((item) => (
          <div className="video-item" key={item.id}>
            <video src={item.url} controls preload="metadata" />
            <h4>
              {item.title}
            </h4>
            <button type="button" onClick={() => removeVideo(item.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoManager
