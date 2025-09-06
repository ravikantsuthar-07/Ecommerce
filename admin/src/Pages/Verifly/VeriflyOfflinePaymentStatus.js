import React from 'react'
import AdminLayout from '../../componets/Layouts/AdminLayout'

const VeriflyOfflinePaymentStatus = () => {
    return (
        <AdminLayout>
            <div class="content container-fluid">
                <div class="d-flex flex-wrap align-items-center mb-4">
                    <h2 class="h1 mb-0 d-flex align-items-center">
                        <img width="20" class="avatar-img" src="https://admin.binjalfarm.com/public/assets/admin/img/all_orders.png" alt="business_setup" />
                        <span class="page-header-title ml-2 mb-0">
                            Offline Payment Method Setup
                        </span>
                    </h2>
                </div>

                <div class="row g-2">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="justify-content-between align-items-center gy-2">
                                    <form action="{{ url()->current() }}" method="GET">
                                        <div class="input-group">
                                            <input id="datatableSearch_" type="search" name="search" class="form-control" placeholder="Search_by_method_name" aria-label="Search" required="" autocomplete="off" />
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn--primary">
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <a href="{{ route('admin.business-settings.web-app.third-party.offline-payment.add') }}" type="button" class="btn btn--primary"><i class="tio-add"></i>Add New Method</a>
                                </div>
                            </div>

                            <div class="py-4">
                                <div class="table-responsive datatable-custom">
                                    <table class="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>SL</th>
                                                <th>Payment Method Name</th>
                                                <th>Payment Info</th>
                                                <th>Required Info from Customer</th>
                                                <th class="text-center">status</th>
                                                <th class="text-center">action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/* @foreach($methods as $key=>$method) */}
                                            <tr>
                                                {/* <td>{{ $methods-> firstitem() + $key}}</td> */}
                                                <td>
                                                    <div class="max-w300 text-wrap">
                                                        {/* {{ $method['method_name']}} */}
                                                    </div>
                                                </td>
                                                {/* <td>
                                            // @foreach($method['method_fields'] as $key=>$fields)
                                                    <span class="border border-white max-w300 text-wrap text-left">
                                                        // {{ $fields['field_name']}} : {{ translate($fields['field_data'])}}
                                                    </span><br />
                                                    // @endforeach
                                                </td> */}
                                                <td>
                                                     {/* @foreach($method['method_informations'] as $key=>$informations)
                                                    <span class="border border-white max-w300 text-wrap text-left">
                                                        {{ translate($informations['information_name'])}} |
                                                    </span>
                                                    @endforeach */}
                                                    <div class="max-w300 text-wrap">
                                                        Payment note
                                                    </div>
                                                </td>
                                                <td>
                                                    <label class="toggle-switch my-0">
                                                        <input type="checkbox"
                                                            class="toggle-switch-input status-change-alert" id="stocksCheckbox{{ $method->id }}"
                                                            data-route="{{ route('admin.business-settings.web-app.third-party.offline-payment.status', [$method->id, $method->status ? 0 : 1]) }}"
                                                            data-message="{{ $method->status? translate('you_want_to_disable_this_method'): translate('you_want_to_active_this_method') }}?"
                                                        // {{ $method-> status ? 'checked' : ''}} 
                                                        />
                                                        <span class="toggle-switch-label mx-auto text">
                                                            <span class="toggle-switch-indicator"></span>
                                                        </span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div class="btn--container justify-content-center">
                                                        <a class="action-btn"
                                                            href="{{ route('admin.business-settings.web-app.third-party.offline-payment.edit', [$method['id']]) }}">
                                                            <i class="tio-edit"></i>
                                                        </a>
                                                        <button class="action-btn btn--danger btn-outline-danger delete-method"
                                                            data-id="{{ $method->id }}">
                                                            <i class="tio-delete-outlined"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>

                                <div class="table-responsive mt-4 px-3">
                                    <div class="d-flex justify-content-lg-end">
                                        {/* {!!$methods -> links()!!} */}
                                    </div>
                                </div>

                                @if(count($methods) == 0)
                                <div class="text-center p-4">
                                    <img class="w-120px mb-3" src="{{asset('/public/assets/admin/svg/illustrations/sorry.svg')}}" alt="{{ translate('Image') }}" />
                                    <p class="mb-0">No Data to show</p>
                                </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default VeriflyOfflinePaymentStatus
