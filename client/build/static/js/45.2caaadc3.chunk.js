;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [45],
  {
    462: function (e, i, t) {
      t.r(i)
      var l = t(1),
        s = t(353),
        a = t(354),
        d = t(19)
      const c = () => {
          const [e, i] = Object(l.useState)(!1)
          return Object(d.jsxs)(s.J, {
            className: 'row g-3 needs-validation',
            noValidate: !0,
            validated: e,
            onSubmit: (e) => {
              !1 === e.currentTarget.checkValidity() && (e.preventDefault(), e.stopPropagation()),
                i(!0)
            },
            children: [
              Object(d.jsxs)(s.A, {
                md: 4,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationCustom01', children: 'Email' }),
                  Object(d.jsx)(s.N, {
                    type: 'text',
                    id: 'validationCustom01',
                    defaultValue: 'Mark',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 4,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationCustom02', children: 'Email' }),
                  Object(d.jsx)(s.N, {
                    type: 'text',
                    id: 'validationCustom02',
                    defaultValue: 'Otto',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 4,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationCustomUsername', children: 'Username' }),
                  Object(d.jsxs)(s.W, {
                    className: 'has-validation',
                    children: [
                      Object(d.jsx)(s.X, { id: 'inputGroupPrepend', children: '@' }),
                      Object(d.jsx)(s.N, {
                        type: 'text',
                        id: 'validationCustomUsername',
                        defaultValue: '',
                        'aria-describedby': 'inputGroupPrepend',
                        required: !0,
                      }),
                      Object(d.jsx)(s.L, { invalid: !0, children: 'Please choose a username.' }),
                    ],
                  }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 6,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationCustom03', children: 'City' }),
                  Object(d.jsx)(s.N, { type: 'text', id: 'validationCustom03', required: !0 }),
                  Object(d.jsx)(s.L, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 3,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationCustom04', children: 'City' }),
                  Object(d.jsxs)(s.Q, {
                    id: 'validationCustom04',
                    children: [
                      Object(d.jsx)('option', { disabled: !0, children: 'Choose...' }),
                      Object(d.jsx)('option', { children: '...' }),
                    ],
                  }),
                  Object(d.jsx)(s.L, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 3,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationCustom05', children: 'City' }),
                  Object(d.jsx)(s.N, { type: 'text', id: 'validationCustom05', required: !0 }),
                  Object(d.jsx)(s.L, { invalid: !0, children: 'Please provide a valid zip.' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                xs: 12,
                children: [
                  Object(d.jsx)(s.K, {
                    type: 'checkbox',
                    id: 'invalidCheck',
                    label: 'Agree to terms and conditions',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, {
                    invalid: !0,
                    children: 'You must agree before submitting.',
                  }),
                ],
              }),
              Object(d.jsx)(s.A, {
                xs: 12,
                children: Object(d.jsx)(s.j, {
                  color: 'primary',
                  type: 'submit',
                  children: 'Submit form',
                }),
              }),
            ],
          })
        },
        r = () => {
          const [e, i] = Object(l.useState)(!1)
          return Object(d.jsxs)(s.J, {
            className: 'row g-3 needs-validation',
            validated: e,
            onSubmit: (e) => {
              !1 === e.currentTarget.checkValidity() && (e.preventDefault(), e.stopPropagation()),
                i(!0)
            },
            children: [
              Object(d.jsxs)(s.A, {
                md: 4,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationDefault01', children: 'Email' }),
                  Object(d.jsx)(s.N, {
                    type: 'text',
                    id: 'validationDefault01',
                    defaultValue: 'Mark',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 4,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationDefault02', children: 'Email' }),
                  Object(d.jsx)(s.N, {
                    type: 'text',
                    id: 'validationDefault02',
                    defaultValue: 'Otto',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, { valid: !0, children: 'Looks good!' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 4,
                children: [
                  Object(d.jsx)(s.O, {
                    htmlFor: 'validationDefaultUsername',
                    children: 'Username',
                  }),
                  Object(d.jsxs)(s.W, {
                    className: 'has-validation',
                    children: [
                      Object(d.jsx)(s.X, { id: 'inputGroupPrepend02', children: '@' }),
                      Object(d.jsx)(s.N, {
                        type: 'text',
                        id: 'validationDefaultUsername',
                        defaultValue: '',
                        'aria-describedby': 'inputGroupPrepend02',
                        required: !0,
                      }),
                      Object(d.jsx)(s.L, { invalid: !0, children: 'Please choose a username.' }),
                    ],
                  }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 6,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationDefault03', children: 'City' }),
                  Object(d.jsx)(s.N, { type: 'text', id: 'validationDefault03', required: !0 }),
                  Object(d.jsx)(s.L, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 3,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationDefault04', children: 'City' }),
                  Object(d.jsxs)(s.Q, {
                    id: 'validationDefault04',
                    children: [
                      Object(d.jsx)('option', { disabled: !0, children: 'Choose...' }),
                      Object(d.jsx)('option', { children: '...' }),
                    ],
                  }),
                  Object(d.jsx)(s.L, { invalid: !0, children: 'Please provide a valid city.' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 3,
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationDefault05', children: 'City' }),
                  Object(d.jsx)(s.N, { type: 'text', id: 'validationDefault05', required: !0 }),
                  Object(d.jsx)(s.L, { invalid: !0, children: 'Please provide a valid zip.' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                xs: 12,
                children: [
                  Object(d.jsx)(s.K, {
                    type: 'checkbox',
                    id: 'invalidCheck',
                    label: 'Agree to terms and conditions',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, {
                    invalid: !0,
                    children: 'You must agree before submitting.',
                  }),
                ],
              }),
              Object(d.jsx)(s.A, {
                xs: 12,
                children: Object(d.jsx)(s.j, {
                  color: 'primary',
                  type: 'submit',
                  children: 'Submit form',
                }),
              }),
            ],
          })
        },
        o = () => {
          const [e, i] = Object(l.useState)(!1)
          return Object(d.jsxs)(s.J, {
            className: 'row g-3 needs-validation',
            noValidate: !0,
            validated: e,
            onSubmit: (e) => {
              !1 === e.currentTarget.checkValidity() && (e.preventDefault(), e.stopPropagation()),
                i(!0)
            },
            children: [
              Object(d.jsxs)(s.A, {
                md: 4,
                className: 'position-relative',
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationTooltip01', children: 'Email' }),
                  Object(d.jsx)(s.N, {
                    type: 'text',
                    id: 'validationTooltip01',
                    defaultValue: 'Mark',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, { tooltip: !0, valid: !0, children: 'Looks good!' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 4,
                className: 'position-relative',
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationTooltip02', children: 'Email' }),
                  Object(d.jsx)(s.N, {
                    type: 'text',
                    id: 'validationTooltip02',
                    defaultValue: 'Otto',
                    required: !0,
                  }),
                  Object(d.jsx)(s.L, { tooltip: !0, valid: !0, children: 'Looks good!' }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 4,
                className: 'position-relative',
                children: [
                  Object(d.jsx)(s.O, {
                    htmlFor: 'validationTooltipUsername',
                    children: 'Username',
                  }),
                  Object(d.jsxs)(s.W, {
                    className: 'has-validation',
                    children: [
                      Object(d.jsx)(s.X, { id: 'inputGroupPrepend', children: '@' }),
                      Object(d.jsx)(s.N, {
                        type: 'text',
                        id: 'validationTooltipUsername',
                        defaultValue: '',
                        'aria-describedby': 'inputGroupPrepend',
                        required: !0,
                      }),
                      Object(d.jsx)(s.L, {
                        tooltip: !0,
                        invalid: !0,
                        children: 'Please choose a username.',
                      }),
                    ],
                  }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 6,
                className: 'position-relative',
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationTooltip03', children: 'City' }),
                  Object(d.jsx)(s.N, { type: 'text', id: 'validationTooltip03', required: !0 }),
                  Object(d.jsx)(s.L, {
                    tooltip: !0,
                    invalid: !0,
                    children: 'Please provide a valid city.',
                  }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 3,
                className: 'position-relative',
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationTooltip04', children: 'City' }),
                  Object(d.jsxs)(s.Q, {
                    id: 'validationTooltip04',
                    required: !0,
                    children: [
                      Object(d.jsx)('option', {
                        disabled: !0,
                        defaultValue: '',
                        children: 'Choose...',
                      }),
                      Object(d.jsx)('option', { children: '...' }),
                    ],
                  }),
                  Object(d.jsx)(s.L, {
                    tooltip: !0,
                    invalid: !0,
                    children: 'Please provide a valid city.',
                  }),
                ],
              }),
              Object(d.jsxs)(s.A, {
                md: 3,
                className: 'position-relative',
                children: [
                  Object(d.jsx)(s.O, { htmlFor: 'validationTooltip05', children: 'City' }),
                  Object(d.jsx)(s.N, { type: 'text', id: 'validationTooltip05', required: !0 }),
                  Object(d.jsx)(s.L, {
                    tooltip: !0,
                    invalid: !0,
                    children: 'Please provide a valid zip.',
                  }),
                ],
              }),
              Object(d.jsx)(s.A, {
                xs: 12,
                className: 'position-relative',
                children: Object(d.jsx)(s.j, {
                  color: 'primary',
                  type: 'submit',
                  children: 'Submit form',
                }),
              }),
            ],
          })
        }
      i.default = () =>
        Object(d.jsxs)(s.rb, {
          children: [
            Object(d.jsx)(s.A, {
              xs: 12,
              children: Object(d.jsx)(a.e, { name: 'Validation', href: 'forms/validation' }),
            }),
            Object(d.jsx)(s.A, {
              xs: 12,
              children: Object(d.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(d.jsxs)(s.r, {
                    children: [
                      Object(d.jsx)('strong', { children: 'Validation' }),
                      ' ',
                      Object(d.jsx)('small', { children: 'Custom styles' }),
                    ],
                  }),
                  Object(d.jsxs)(s.o, {
                    children: [
                      Object(d.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          "For custom CoreUI form validation messages, you'll need to add the",
                          ' ',
                          Object(d.jsx)('code', { children: 'noValidate' }),
                          ' boolean property to your ',
                          Object(d.jsx)('code', { children: '<CForm>' }),
                          ". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you'll see the ",
                          Object(d.jsx)('code', { children: ':invalid' }),
                          ' and ',
                          Object(d.jsx)('code', { children: ':valid' }),
                          ' styles applied to your form controls.',
                        ],
                      }),
                      Object(d.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.',
                          ' ',
                        ],
                      }),
                      Object(d.jsx)(a.f, { href: 'forms/validation', children: c() }),
                    ],
                  }),
                ],
              }),
            }),
            Object(d.jsx)(s.A, {
              xs: 12,
              children: Object(d.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(d.jsxs)(s.r, {
                    children: [
                      Object(d.jsx)('strong', { children: 'Validation' }),
                      ' ',
                      Object(d.jsx)('small', { children: 'Browser defaults' }),
                    ],
                  }),
                  Object(d.jsxs)(s.o, {
                    children: [
                      Object(d.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.",
                      }),
                      Object(d.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.',
                      }),
                      Object(d.jsx)(a.f, {
                        href: 'forms/validation#browser-defaults',
                        children: r(),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(d.jsx)(s.A, {
              xs: 12,
              children: Object(d.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(d.jsxs)(s.r, {
                    children: [
                      Object(d.jsx)('strong', { children: 'Validation' }),
                      ' ',
                      Object(d.jsx)('small', { children: 'Server side' }),
                    ],
                  }),
                  Object(d.jsxs)(s.o, {
                    children: [
                      Object(d.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with ',
                          Object(d.jsx)('code', { children: 'invalid' }),
                          ' ',
                          'and ',
                          Object(d.jsx)('code', { children: 'valid' }),
                          ' boolean properties.',
                        ],
                      }),
                      Object(d.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using ',
                          Object(d.jsx)('code', { children: 'aria-describedby' }),
                          ' (noting that this attribute allows more than one ',
                          Object(d.jsx)('code', { children: 'id' }),
                          ' to be referenced, in case the field already points to additional form text).',
                        ],
                      }),
                      Object(d.jsx)(a.f, {
                        href: 'forms/validation#server-side',
                        children: Object(d.jsxs)(s.J, {
                          className: 'row g-3 needs-validation',
                          children: [
                            Object(d.jsxs)(s.A, {
                              md: 4,
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationServer01',
                                  children: 'Email',
                                }),
                                Object(d.jsx)(s.N, {
                                  type: 'text',
                                  id: 'validationServer01',
                                  defaultValue: 'Mark',
                                  valid: !0,
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, { valid: !0, children: 'Looks good!' }),
                              ],
                            }),
                            Object(d.jsxs)(s.A, {
                              md: 4,
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationServer02',
                                  children: 'Email',
                                }),
                                Object(d.jsx)(s.N, {
                                  type: 'text',
                                  id: 'validationServer02',
                                  defaultValue: 'Otto',
                                  valid: !0,
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, { valid: !0, children: 'Looks good!' }),
                              ],
                            }),
                            Object(d.jsxs)(s.A, {
                              md: 4,
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationServerUsername',
                                  children: 'Username',
                                }),
                                Object(d.jsxs)(s.W, {
                                  className: 'has-validation',
                                  children: [
                                    Object(d.jsx)(s.X, {
                                      id: 'inputGroupPrepend03',
                                      children: '@',
                                    }),
                                    Object(d.jsx)(s.N, {
                                      type: 'text',
                                      id: 'validationServerUsername',
                                      defaultValue: '',
                                      'aria-describedby': 'inputGroupPrepend03',
                                      invalid: !0,
                                      required: !0,
                                    }),
                                    Object(d.jsx)(s.L, {
                                      invalid: !0,
                                      children: 'Please choose a username.',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(d.jsxs)(s.A, {
                              md: 6,
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationServer03',
                                  children: 'City',
                                }),
                                Object(d.jsx)(s.N, {
                                  type: 'text',
                                  id: 'validationServer03',
                                  invalid: !0,
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'Please provide a valid city.',
                                }),
                              ],
                            }),
                            Object(d.jsxs)(s.A, {
                              md: 3,
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationServer04',
                                  children: 'City',
                                }),
                                Object(d.jsxs)(s.Q, {
                                  id: 'validationServer04',
                                  invalid: !0,
                                  children: [
                                    Object(d.jsx)('option', {
                                      disabled: !0,
                                      children: 'Choose...',
                                    }),
                                    Object(d.jsx)('option', { children: '...' }),
                                  ],
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'Please provide a valid city.',
                                }),
                              ],
                            }),
                            Object(d.jsxs)(s.A, {
                              md: 3,
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationServer05',
                                  children: 'City',
                                }),
                                Object(d.jsx)(s.N, {
                                  type: 'text',
                                  id: 'validationServer05',
                                  invalid: !0,
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'Please provide a valid zip.',
                                }),
                              ],
                            }),
                            Object(d.jsxs)(s.A, {
                              xs: 12,
                              children: [
                                Object(d.jsx)(s.K, {
                                  type: 'checkbox',
                                  id: 'invalidCheck',
                                  label: 'Agree to terms and conditions',
                                  invalid: !0,
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'You must agree before submitting.',
                                }),
                              ],
                            }),
                            Object(d.jsx)(s.A, {
                              xs: 12,
                              children: Object(d.jsx)(s.j, {
                                color: 'primary',
                                type: 'submit',
                                children: 'Submit form',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(d.jsx)(s.A, {
              xs: 12,
              children: Object(d.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(d.jsxs)(s.r, {
                    children: [
                      Object(d.jsx)('strong', { children: 'Validation' }),
                      ' ',
                      Object(d.jsx)('small', { children: 'Supported elements' }),
                    ],
                  }),
                  Object(d.jsxs)(s.o, {
                    children: [
                      Object(d.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Validation styles are available for the following form controls and components:',
                      }),
                      Object(d.jsxs)('ul', {
                        children: [
                          Object(d.jsxs)('li', {
                            children: [Object(d.jsx)('code', { children: '<CFormInput>' }), 's'],
                          }),
                          Object(d.jsxs)('li', {
                            children: [Object(d.jsx)('code', { children: '<CFormSelect>' }), 's'],
                          }),
                          Object(d.jsxs)('li', {
                            children: [Object(d.jsx)('code', { children: '<CFormCheck>' }), 's'],
                          }),
                        ],
                      }),
                      Object(d.jsx)(a.f, {
                        href: 'forms/validation#supported-elements',
                        children: Object(d.jsxs)(s.J, {
                          validated: !0,
                          children: [
                            Object(d.jsxs)('div', {
                              className: 'mb-3',
                              children: [
                                Object(d.jsx)(s.O, {
                                  htmlFor: 'validationTextarea',
                                  className: 'form-label',
                                  children: 'Textarea',
                                }),
                                Object(d.jsx)(s.S, {
                                  id: 'validationTextarea',
                                  placeholder: 'Required example textarea',
                                  invalid: !0,
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'Please enter a message in the textarea.',
                                }),
                              ],
                            }),
                            Object(d.jsx)(s.K, {
                              className: 'mb-3',
                              id: 'validationFormCheck1',
                              label: 'Check this checkbox',
                              required: !0,
                            }),
                            Object(d.jsx)(s.L, {
                              invalid: !0,
                              children: 'Example invalid feedback text',
                            }),
                            Object(d.jsx)(s.K, {
                              type: 'radio',
                              name: 'radio-stacked',
                              id: 'validationFormCheck2',
                              label: 'Check this checkbox',
                              required: !0,
                            }),
                            Object(d.jsx)(s.K, {
                              className: 'mb-3',
                              type: 'radio',
                              name: 'radio-stacked',
                              id: 'validationFormCheck3',
                              label: 'Or toggle this other radio',
                              required: !0,
                            }),
                            Object(d.jsx)(s.L, {
                              invalid: !0,
                              children: 'More example invalid feedback text',
                            }),
                            Object(d.jsxs)('div', {
                              className: 'mb-3',
                              children: [
                                Object(d.jsxs)(s.Q, {
                                  required: !0,
                                  'aria-label': 'select example',
                                  children: [
                                    Object(d.jsx)('option', { children: 'Open this select menu' }),
                                    Object(d.jsx)('option', { value: '1', children: 'One' }),
                                    Object(d.jsx)('option', { value: '2', children: 'Two' }),
                                    Object(d.jsx)('option', { value: '3', children: 'Three' }),
                                  ],
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'Example invalid select feedback',
                                }),
                              ],
                            }),
                            Object(d.jsxs)('div', {
                              className: 'mb-3',
                              children: [
                                Object(d.jsx)(s.N, {
                                  type: 'file',
                                  id: 'validationTextarea',
                                  'aria-label': 'file example',
                                  required: !0,
                                }),
                                Object(d.jsx)(s.L, {
                                  invalid: !0,
                                  children: 'Example invalid form file feedback',
                                }),
                              ],
                            }),
                            Object(d.jsx)('div', {
                              className: 'mb-3',
                              children: Object(d.jsx)(s.j, {
                                type: 'submit',
                                color: 'primary',
                                disabled: !0,
                                children: 'Submit form',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(d.jsx)(s.A, {
              xs: 12,
              children: Object(d.jsxs)(s.n, {
                className: 'mb-4',
                children: [
                  Object(d.jsxs)(s.r, {
                    children: [
                      Object(d.jsx)('strong', { children: 'Validation' }),
                      ' ',
                      Object(d.jsx)('small', { children: 'Tooltips' }),
                    ],
                  }),
                  Object(d.jsxs)(s.o, {
                    children: [
                      Object(d.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'If your form layout allows it, you can swap the text for the tooltip to display validation feedback in a styled tooltip. Be sure to have a parent with',
                          ' ',
                          Object(d.jsx)('code', { children: 'position: relative' }),
                          ' on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.',
                        ],
                      }),
                      Object(d.jsx)(a.f, { href: 'forms/validation#tooltips', children: o() }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    },
  },
])
//# sourceMappingURL=45.2caaadc3.chunk.js.map
