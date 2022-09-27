import React from 'react'

const RegisterScreen = () => {



  return (
    <body data-kt-name="metronic" id="kt_body" class="app-blank app-blank">
      {/*begin::Theme mode setup on page load*/}
      {/*end::Theme mode setup on page load*/}
      {/*begin::Root*/}
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        {/*begin::Authentication - Sign-in */}
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Body*/}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/*begin::Form*/}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/*begin::Wrapper*/}
              <div className="w-lg-500px p-10">
                {/*begin::Form*/}
                <form
                  className="form w-100"
                  noValidate="novalidate"
                  id="kt_sign_in_form"
                  data-kt-redirect-url="../../demo1/dist/index.html"
                  action="#"
                >
                  {/*begin::Heading*/}
                  <div className="text-center mb-11">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
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
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <i class="fa-brands fa-google"></i>
                        Sign in with Google
                      </a>
                      {/*end::Google link=*/}
                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-md-6">
                      {/*begin::Google link=*/}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <i class="fa-brands fa-apple "></i>
                        Sign in with Apple
                      </a>
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
                  {/*end::Input group=*/}
                  <div className="fv-row mb-3">
                    {/*begin::Password*/}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Password*/}
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div />
                    {/*begin::Link*/}
                    <a
                      href="/forgetPassword"
                      className="link-primary"
                    >
                      Forgot Password ?
                    </a>
                    {/*end::Link*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Submit button*/}
                  <div className="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      className="btn btn-primary"
                    >
                      {/*begin::Indicator label*/}
                      <span className="indicator-label">Sign In</span>
                      {/*end::Indicator label*/}
                      {/*begin::Indicator progress*/}
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                      {/*end::Indicator progress*/}
                    </button>
                  </div>
                  {/*end::Submit button*/}
                  {/*begin::Sign up*/}
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not a Member yet?
                    <a
                      href="/register"
                      className="link-primary"
                    >
                      Sign up
                    </a>
                  </div>
                  {/*end::Sign up*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Form*/}
            {/*begin::Footer*/}
            <div className="d-flex flex-center flex-wrap px-5">
              {/*begin::Links*/}
              <div className="d-flex fw-semibold text-primary fs-base">
                <a
                  href="../../demo1/dist/pages/team.html"
                  className="px-5"
                  target="_blank"
                >
                  Terms
                </a>
                <a
                  href="../../demo1/dist/pages/pricing/column.html"
                  className="px-5"
                  target="_blank"
                >
                  Plans
                </a>
                <a
                  href="../../demo1/dist/pages/contact.html"
                  className="px-5"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
              {/*end::Links*/}
            </div>
            {/*end::Footer*/}
          </div>
          {/*end::Body*/}
          {/*begin::Aside*/}

        </div>
        {/*end::Authentication - Sign-in*/}
      </div>

    </body>
  )
}

export default RegisterScreen