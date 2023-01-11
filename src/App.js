// Import the main component
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';


function App() {
  const getFilePluginInstance = getFilePlugin();
  const zoomPluginInstance = zoomPlugin();

  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  const { DownloadButton } = getFilePluginInstance;

  return (
    <div
        className="rpv-core__viewer"
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
    >
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                padding: '4px',
            }}
        >
            <DownloadButton />
        </div>
        <div
            style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                padding: '4px',
            }}
        >
            <ZoomOutButton />
            <ZoomPopover />
            <ZoomInButton />
        </div>
        <div
            style={{
                flex: 1,
                overflow: 'hidden',
            }}
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                <Viewer plugins={[getFilePluginInstance, zoomPluginInstance]} fileUrl="res.pdf" />
            </Worker>
        </div>
    </div>
  );
}

export default App;
