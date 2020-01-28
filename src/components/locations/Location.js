import React from "react"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.address}</h3>
        <address className="location__address">{location.squareFootage}</address>
        <p className="location__handicap">{ location.handicapAccessible ? "Yes" : "No" }</p>
    </section>
)