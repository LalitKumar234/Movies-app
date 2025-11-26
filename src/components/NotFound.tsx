const NotFound = ({onGoBack}: {onGoBack: () => void}) => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-white text-center">
                <h2 className="text-xl mb-2">Movie not found</h2>
                <button
                    onClick={onGoBack}
                    className="text-blue-400 hover:text-blue-300"
                >
                    Go back to search
                </button>
            </div>
        </div>
    )
}

export default NotFound
