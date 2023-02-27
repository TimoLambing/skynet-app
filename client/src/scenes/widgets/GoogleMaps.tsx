import React from 'react'

function GoogleMaps() {
  return (
    <div className="grayscale">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45930.89638979155!2d24.62027634003268!3d59.41842969734474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295d22fe79aaf%3A0x3970210c0e1f8832!2sP%C3%A4evalille%20tn%206%2C%2013513%20Tallinn!5e0!3m2!1sen!2see!4v1677524311111!5m2!1sen!2see"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default GoogleMaps
