import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import './app.css';

export function App() {
  const [url, setUrl] = useState('');
  const [codelink, setCodeLink] = useState('');

  function genereteQrCode(link_url: string) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, (err: any, url: string) => {
      setCodeLink(url)
    })
  }

  function getLinkInput(e: any) {
    setUrl(e.target.value);
    genereteQrCode(e.target.value);
  }

  return (
    <div className="Container">
      <QRCode 
        value={url}
      />

      <input 
        type="text" 
        placeholder="Digite seu link..." 
        onChange={(e) => getLinkInput(e)}
        className="input"
      />

     <a href={codelink} download={`qrcode.png`} >Baixar QrCode</a>
    </div>
  )
}