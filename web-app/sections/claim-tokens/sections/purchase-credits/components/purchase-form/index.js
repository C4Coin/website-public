import React from 'react'
import PropTypes from 'prop-types'
import camelcase from 'camelcase-keys'
import FormManager from 'modules/form-manager-module'
import s from './index.scss'
import Drawer from 'components/drawer'
import defaultFields from './default-fields'
import { Link } from 'react-router-dom'
import Format from 'utils/format'
import StyleVariables from 'style/style.variables.scss'
import ReactGA from 'react-ga'

import Analytics from 'modules/analytics'

const FieldCheckbox = FormManager.FieldCheckbox
const Field = FormManager.Field

const { $lightGray } = camelcase(StyleVariables.global)

PurchaseForm.propTypes = {
  fieldValues: PropTypes.objectOf(PropTypes.string),
  submit: PropTypes.func.isRequired
}

function addFilledClass({ className = '', ...props }) {
  return { className: `${className} ${s['filled']}`, ...props }
}

function CField(props) {
  return <Field filled={addFilledClass} {...props} />
}

export default function PurchaseForm({ fieldValues, submit }) {
  const fullFields = Format.objectMap(defaultFields, (name, field) => {
    if (fieldValues[name]) {
      return { [name]: { ...field, value: fieldValues[name] } }
    }
    return { [name]: field }
  })

  return (
    <FormManager submit={submit} fields={fullFields}>
      {({ managedFields, managedSubmit }) => {
        const canSubmit = managedFields.hasAgreed.value

        const submitStyle = canSubmit ? {} : { backgroundColor: $lightGray }

        return (
          <form className={s['form']} onSubmit={managedSubmit}>
            <div className={s['row']}>
              <CField
                fieldId="first"
                fields={managedFields}
                placeholder="First Name"
                required
              />
              <CField
                fieldId="last"
                fields={managedFields}
                placeholder="Last Name"
                required
              />
            </div>
            <CField
              fieldId="email"
              fields={managedFields}
              type="email"
              placeholder="Email"
              required
            />
            <div className={s['purchases']}>
              <p>
                <strong>Carbon Credits cost $5.00 each.</strong> How many would
                you like to purchase?
              </p>
              <div className={s['purchase-display']}>
                <div className={s['purchase-row']}>
                  <div className={s['quantity-header']}>quantity</div>
                  <div className={s['price-header']}>Price</div>
                  <div className={s['total-header']}>Total</div>
                </div>
                <div className={s['purchase-row']}>
                  <CField
                    fieldId="quantity"
                    type="number"
                    fields={managedFields}
                    className={s['quantity']}
                    required
                    min="1"
                  />
                  <div className={s['price']}>$5.00</div>
                  <div className={s['total']}>
                    ${managedFields.quantity.value * 5}.00
                  </div>
                </div>
              </div>
            </div>
            <div className={s['company-section']}>
              <label htmlFor="isForCompany">
                <FieldCheckbox
                  fieldId="isForCompany"
                  fields={managedFields}
                  className={s['checkbox']}
                />
                Are you redeeming on behalf of a corporation?
              </label>
              <Drawer isOpen={managedFields.isForCompany.value}>
                <CField
                  fieldId="company"
                  fields={managedFields}
                  placeholder="Company / Organization"
                  required={managedFields.isForCompany.value}
                />
              </Drawer>
            </div>
            <CField
              fieldId={'phone'}
              fields={managedFields}
              placeholder="Phone Number"
              required
            />
            <CField
              fieldId={'addressLineOne'}
              fields={managedFields}
              placeholder="Address Line 1"
              required
            />
            <CField
              fieldId={'addressLineTwo'}
              fields={managedFields}
              placeholder="Address Line 2"
              required
            />
            <div className={s['row']}>
              <CField
                fieldId={'country'}
                fields={managedFields}
                placeholder="Country"
                required
              />
              <CField
                fieldId={'state'}
                fields={managedFields}
                placeholder="state"
                required
              />
            </div>
            <div className={s['row']}>
              <CField
                fieldId={'city'}
                fields={managedFields}
                placeholder="city"
                required
              />
              <CField
                fieldId={'zip'}
                fields={managedFields}
                placeholder="zip"
                required
              />
            </div>
            <div className={s['network-access']}>
              <p>
                <strong> Interested in early network access?</strong> Please
                provide what you can below for higher priority.
              </p>
              <CField
                fieldId={'linkedin'}
                fields={managedFields}
                placeholder="Linkedin - optional"
              />
              <CField
                fieldId={'github'}
                fields={managedFields}
                placeholder="Github - optional"
              />
            </div>
            <div className={s['checkout-section']}>
              <label htmlFor="hasAgreed">
                <FieldCheckbox
                  fieldId="hasAgreed"
                  fields={managedFields}
                  className={s['checkbox']}
                  onChange={() => {
                    ReactGA.event(Analytics.EVENTS.ACCEPT_PURCHASE_TOS)
                  }}
                  required
                />
                <span>
                  I have read and agree to the&nbsp;
                  <Link to="/tos/co2kn-terms-and-conditions" target="_blank">
                    terms of service
                  </Link>
                </span>
              </label>
              <div className={s['submit-display']}>
                <button type="submit" style={submitStyle}>
                  Checkout with CCC
                </button>
              </div>
            </div>
          </form>
        )
      }}
    </FormManager>
  )
}
