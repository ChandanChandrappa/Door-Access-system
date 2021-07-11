import React, { Component } from "react";

export class Door extends Component {
    render() {
        const cardBgColor = this.props.IsOpen ? "border-success" : "border-danger";
        const btnBgColor = this.props.IsOpen ? "bg-success" : "bg-danger";

        return (
            <div className="col">
                <div className="col-sm-3">
                    <div
                        className={"card text-black " + cardBgColor + " border-3 mb-6 m-2"}
                    >
                        <div className="card-body">
                            <div className="input-group m-2">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputFirstName"
                                    onChange={(e) =>
                                        this.props.onChange(e.currentTarget.value, this.props)
                                    }
                                />
                                <i class="fa fa-edit m-2"></i>
                            </div>
                            <h5>{this.props.Name}</h5>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onClick={() => this.props.OnHandleLock(this.props)}
                                    checked={this.props.IsLocked}
                                    disabled={this.props.IsOpen}
                                />
                                <label className="form-check-label">
                                    {this.props.IsLocked ? "Locked" : "Un-Locked"}
                                </label>
                            </div>
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onClick={() => this.props.HandleOpenClose(this.props.Id)}
                                    checked={this.props.IsOpen}
                                />
                                <label className="form-check-label">
                                    {this.props.IsOpen ? "Opened" : "Closed"}
                                </label>
                            </div>
                            <button
                                className="btn btn-danger m-2"
                                onClick={() => this.props.HandleRemove(this.props.Id)}
                            >
                                Remove Door
              </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}