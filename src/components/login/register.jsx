import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">School Name</label>
                            <input type="text" name="School name" placeholder="School Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">Distric of School</label>
                            <input type="text" name="District" placeholder="E.g Mangan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="block">District Block</label>
                            <input type="text" name="block" placeholder="E.g Chongrang BAC" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Register
                    </button>
                </div>
            </div>
        );
    }
}