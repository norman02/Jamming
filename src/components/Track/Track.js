import React from "react";

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this)
    }

    renderAction() {
        let isRemoval = true
        if(isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }

    }
    render() {
        return(<div class="Track">
        <div class="Track-information">
          <h3>Sample Track</h3>
          <p>Some Artist | Some Album</p>
        </div>
        {this.renderAction()}
      </div>)
    }
}