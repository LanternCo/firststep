import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { signInAction } from "./actions/actions.js";
import { connect } from "react-redux";
import { validate } from "validate.js";

const FormField = ({
    label,
    input,
    type,
    name,
    className,
    meta: { touched, error, warning }
}) => (
    <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input
            {...input}
            name={name}
            type={type}
            className={`${className} ${touched && (error && "is-invalid")}`}
        />
        {touched &&
            (error && <span className="invalid-feedback">{error}</span>)}
    </div>
);

class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.processSubmit = this.processSubmit.bind(this);
    }

    componentWillMount() {
        // do something like setting default state
    }

    processSubmit(values) {
        this.props.signInAction(values, this.props.history);
    }

    errorMessage() {
        if (this.props.errorMessage) {
            return <div className="info-red">{this.props.errorMessage}</div>;
        }
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center font-weight-light mb-4">
                                    Sign into your account
                                </h2>
                                <form
                                    onSubmit={handleSubmit(this.processSubmit)}
                                >
                                    <Field
                                        label="Email Address"
                                        name="email"
                                        component={FormField}
                                        id="email"
                                        type="text"
                                        className="form-control"
                                    />
                                    <Field
                                        label="Password"
                                        name="password"
                                        component={FormField}
                                        id="password"
                                        type="password"
                                        className="form-control"
                                    />
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <Field
                                                name="remember"
                                                component="input"
                                                type="checkbox"
                                                className="form-check-input mt-2"
                                                value="1"
                                            />
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-secondary"
                                            disabled={submitting}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </form>
                                {this.errorMessage()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const validatorSignInForm = values => {
    const result = validate(values, {
        email: {
            presence: {
                message: "^Please enter your email address."
            },
            email: {
                message: "^Please enter a valid email address."
            }
        },
        password: {
            presence: {
                message: "^Please enter your password."
            }
        }
    });

    return result;
};

const reduxFormSignin = reduxForm({
    form: "signin",
    validate: validatorSignInForm
})(SignInPage);

export default connect(
    mapStateToProps,
    { signInAction }
)(reduxFormSignin);
