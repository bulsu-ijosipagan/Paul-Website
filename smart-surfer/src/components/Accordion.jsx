import { useEffect, useState } from 'react'

function Accordion({ title, children, image, defaultOpen = false }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <article className="accordion">
      <div className="accordion-trigger">
        <button
          className="accordion-image-button"
          onClick={() => setOpen(true)}
          aria-label={`Open information about ${title}`}
        >
          <img className="accordion-image" src={image} alt="" />
        </button>
        <span>{title}</span>
        <button className="topic-open-button" onClick={() => setOpen(true)}>
          View details <span aria-hidden="true">↗</span>
        </button>
      </div>
      {open && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="topic-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`topic-${title}`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close details">×</button>
            <div className="modal-layout">
              <img className="modal-image" src={image} alt="" />
              <div className="modal-details">
                <h3 id={`topic-${title}`}>{title}</h3>
                <div className="modal-content">{children}</div>
              </div>
            </div>
          </section>
        </div>
      )}
    </article>
  )
}

export default Accordion
