import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Home() {
  useEffect(() => {
    // Leafletのアイコンの問題を解決するためのハック
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    })
  }, [])

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[35.6895, 139.6917]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[35.6895, 139.6917]}>
          <Popup>
            東京タワー
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}