import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {


    return (
        <body data-kt-name="metronic" id="kt_body" class="app-blank app-blank">

                {/*begin::Authentication - Sign-up */}
                <div className="form d-flex flex-column flex-lg-row flex-column-fluid">
                    {/*begin::Body*/}
                    <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                        {/*begin::Form*/}
                        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                            {/*begin::Wrapper*/}
                            <div className="w-lg-500px p-10 bg-light form-1">
                                {/*begin::Form*/}
                                <form
                                    className="w-100"
                                    noValidate="novalidate"
                                    id="kt_sign_up_form"
                                    data-kt-redirect-url="../../demo1/dist/authentication/layouts/corporate/sign-in.html"
                                    action="#"
                                >
                                    {/*begin::Heading*/}
                                    <div className="text-center mb-11">
                                        {/*begin::Title*/}
                                        <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                                        {/*end::Title*/}
                                        {/*begin::Subtitle*/}
                                        <div className="text-gray-500 fw-semibold fs-6">
                                            Your Social Campaigns
                                        </div>
                                        {/*end::Subtitle=*/}
                                    </div>
                                    {/*begin::Heading*/}
                                    {/*begin::Login options*/}
                                    <div className="row g-3 mb-9">
                                        {/*begin::Col*/}
                                        <div className="col-md-6">
                                            {/*begin::Google link=*/}
                                            <Link
                                                to="#"
                                                className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-success bg-state-light flex-center text-nowrap w-100"
                                            >
                                                <i class="fa-brands fa-google"></i>
                                                Sign in with Google
                                            </Link>
                                            {/*end::Google link=*/}
                                        </div>
                                        {/*end::Col*/}
                                        {/*begin::Col*/}
                                        <div className="col-md-6">
                                            {/*begin::Google link=*/}
                                            <Link
                                                to="#"
                                                className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-success bg-state-light flex-center text-nowrap w-100"
                                            >

                                                <i class="fa-brands fa-apple "></i>
                                                Sign in with Apple
                                            </Link>
                                            {/*end::Google link=*/}
                                        </div>
                                        {/*end::Col*/}
                                    </div>
                                    {/*end::Login options*/}
                                    {/*begin::Separator*/}
                                    <div className="separator separator-content my-14">
                                        <span className="w-125px text-gray-500 fw-semibold fs-7">
                                            Or with email
                                        </span>
                                    </div>
                                    {/*end::Separator*/}
                                    {/*begin::Input group=*/}
                                    <div className="fv-row mb-8">
                                        {/*begin::Email*/}
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            autoComplete="off"
                                            className="form-control bg-transparent"
                                        />
                                        {/*end::Email*/}
                                    </div>
                                    {/*begin::Input group*/}
                                    <div className="fv-row mb-8" data-kt-password-meter="true">
                                        {/*begin::Wrapper*/}
                                        <div className="mb-1">
                                            {/*begin::Input wrapper*/}
                                            <div className=" mb-3">
                                                <input
                                                    className="form-control bg-transparent"
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    autoComplete="off"
                                                />
                                                <span
                                                    className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                                    data-kt-password-meter-control="visibility"
                                                >
                                                    <i className="bi bi-eye-slash fs-2" />
                                                    <i className="bi bi-eye fs-2 d-none" />
                                                </span>
                                            </div>
                                            {/*end::Input wrapper*/}
                                            {/*begin::Meter*/}

                                        </div>
                                        {/*end::Wrapper*/}
                                        {/*begin::Hint*/}
                                        <div className="text-muted">
                                            Use 8 or more characters with a mix of letters, numbers &amp;
                                            symbols.
                                        </div>
                                        {/*end::Hint*/}
                                    </div>
                                    {/*end::Input group=*/}
                                    {/*end::Input group=*/}
                                    <div className="fv-row mb-8">
                                        {/*begin::Repeat Password*/}
                                        <input
                                            placeholder="Repeat Password"
                                            name="confirm-password"
                                            type="password"
                                            autoComplete="off"
                                            className="form-control bg-transparent"
                                        />
                                        {/*end::Repeat Password*/}
                                    </div>
                                    {/*end::Input group=*/}
                                    {/*begin::Accept*/}
                                    <div className="fv-row mb-8">
                                        <label className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="toc"
                                                defaultValue={1}
                                            />
                                            <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                                                I Accept the
                                                <Link to="/" className="ms-1 link-success">
                                                    Terms
                                                </Link>
                                            </span>
                                        </label>
                                    </div>
                                    {/*end::Accept*/}
                                    {/*begin::Submit button*/}
                                    <div className="d-grid mb-10 btn">

                                        <Link
                                            to="/"
                                            className="text-light"
                                        >
                                            Sign up
                                        </Link>

                                    </div>
                                    {/*end::Submit button*/}
                                    {/*begin::Sign up*/}
                                    <div className="text-gray-500 text-center fw-semibold fs-6">
                                        Already have an Account?
                                        <Link
                                            to="/login"
                                            className="link-success fw-semibold"
                                        >
                                            Sign in
                                        </Link>
                                    </div>
                                    {/*end::Sign up*/}
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Wrapper*/}
                        </div>
                    </div>
                 </div>
        </body>
    )
}

export default RegisterScreen