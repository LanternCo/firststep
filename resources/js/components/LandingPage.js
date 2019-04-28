import React, { Component } from "react";

class LandingPage extends Component {
    constructor(props) {
        super(props);

        // SEE EXAMPLE
        // this.processSubmit = this.processSubmit.bind(this);
    }

    // Example function setup
    // processSubmit(values) {
    //     this.props.signInAction(values, this.props.history);
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="container p-5 border-bottom">
                    <p className="text-center font-weight-light mb-4">
                        Take one pint of water, add a half pound of sugar, the juice of eight lemons,
                        the zest of half a lemon.<br />Pour the water from one jug then into the other several
                        times. Strain through a clean napkin.
                    </p>
                    <div class="text-center">
                        <button type="button" class="btn btn-secondary btn-lg">Large button</button>
                    </div>
                </div>
                <div className="container p-5 border-bottom">
                    <h2 className="text-center font-weight-light mb-4">How It Works:</h2>
                    <div class="text-left">
                        <h4>List of things to do goes here</h4>
                    </div>
                </div>
                <div className="container p-5">
                    <h2 className="text-left font-weight-light mb-4">About Us</h2>
                    <p className="text-left font-weight-light mb-4">
                        The nail technician pushed my cuticles back ... turns my hand over,
                        stretches the skin on my palm and says, "I see your daughters and their
                        daughters." That night in a dream, the first girl emerges from a slit in
                        my stomach. The scar heals into a smile. The man I love pulls the stitches
                        out with his fingernails. We leave black sutures curling on the side of
                        the bath.
                    </p>
                </div>
            </div>
        );
    }
}

export default LandingPage;
