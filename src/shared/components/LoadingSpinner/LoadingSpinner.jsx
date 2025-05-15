export default function LoadingSpinner() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
        }}>
            <div className="spinner" />
            <style>{`
        .spinner {
          width: 48px;
          height: 48px;
          border: 5px solid #eee;
          border-top-color: #333;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg) }
        }
      `}</style>
        </div>
    )
}