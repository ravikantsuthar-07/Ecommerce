import React from 'react'

const AddCustomerModal = () => {
    return (
        <div className="modal fade add-customer" id="add-customer">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new customer</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form  method="post">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="input-label">First name <span className="input-label-secondary text-danger">*</span></label>
                                        <input type="text" name="f_name" className="form-control" value="" placeholder="First name" required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="input-label">Last name <span className="input-label-secondary text-danger">*</span></label>
                                        <input type="text" name="l_name" className="form-control" value="" placeholder="Last name" required="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="input-label">Email<span className="input-label-secondary text-danger">*</span></label>
                                        <input type="email" name="email" className="form-control" value="" placeholder="Ex : ex@example.com" required="" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="input-label">Phone (With country code)<span className="input-label-secondary text-danger">*</span></label>
                                        <input type="text" name="phone" className="form-control" value="" placeholder="Phone" required="" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn--container justify-content-end">
                                <button type="reset" className="btn btn--reset">Reset</button>
                                <button type="submit" id="submit_new_customer" className="btn btn--primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomerModal
