import html2pdf from 'html2pdf.js'

import { render } from 'preact'
import { useState } from 'preact/hooks'

import songs from './songs'
import Fab from './components/Fab'
import Song from './components/Song'
import Pallet from './components/Pallet'

import Code from './icons/Code'
import Note from './icons/Note'
import Download from './icons/Download'

const App = () => {
  const [alias, setAlias] = useState(false)

  const songsJson = encodeURIComponent(JSON.stringify(songs, null, 2))

  const toggle = () => setAlias(!alias)

  const json = () => {
    document.getElementById('download-json').click()
  }

  const download = () => {
    document.querySelectorAll('.fix-note').forEach((el) => {
      el.classList.add('-mt-4')
    })

    document.querySelectorAll('.fix-badge').forEach((el) => {
      el.classList.add('py-2')
      el.classList.add('-mt-4')
    })

    html2pdf(document.getElementById('print'), {
      filename: 'notes.pdf',
      pagebreak: { mode: 'avoid-all', after: '.song' }
    }).then(() => {
      document.querySelectorAll('.fix-note').forEach((el) => {
        el.classList.remove('-mt-4')
      })

      document.querySelectorAll('.fix-badge').forEach((el) => {
        el.classList.remove('py-2')
        el.classList.remove('-mt-4')
      })
    })
  }

  return (
    <>
      <Pallet />
      <Fab
        actions={[
          { Icon: Code, onClick: json },
          { Icon: Note, onClick: toggle },
          { Icon: Download, onClick: download },
        ]}
      />
      <div id="print">
        {songs.map(({ title, artist, scale, notes }) => (
          <Song
            alias={alias}
            title={title}
            scale={scale}
            notes={notes}
            artist={artist}
          />
        ))}
      </div>
      <a
        id="download-json"
        download="notes.json"
        href={`data:text/plain;charset=utf-8,${songsJson}`}
      />
    </>
  )
}

render(<App />, document.getElementById('root'))
