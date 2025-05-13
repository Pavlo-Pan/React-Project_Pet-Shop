const GoogleMapEmbed = ({ width = 1350, height = 350 }) => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38853.17939150012!2d13.411162612462036!3d52.509476899533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sde!2sde!4v1747123527153!5m2!1sde!2sde"
            width={width}
            height={height}
            style={{ borderRadius: 12 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
        />
    );
};

export default GoogleMapEmbed;