(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(e,t,o){"use strict";o.r(t);var r={name:"PostFormAxios",data:function(){return{form:{code1:"",code2:"",code3:"",code4:""}}},methods:{submit:function(){axios.post("https://0ru6ce2o40.execute-api.eu-west-1.amazonaws.com/beta/kfc-holdem/verify-codes",this.form).then(function(e){}.bind(this))}}},c=o(37),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"section section-enter-codes"},[o("div",{staticClass:"container"},[o("h2",[e._v("Enter Your Codes")]),e._v(" "),o("div",{staticClass:"row"},[e._m(0),e._v(" "),o("div",{staticClass:"col-sm-6"},[o("form",{staticClass:"form-entry",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"field-label",attrs:{for:"code1"}},[e._v("Code 1")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.code1,expression:"form.code1"}],staticClass:"form-control",attrs:{type:"text",id:"code1",name:"code1",placeholder:"Code 1"},domProps:{value:e.form.code1},on:{input:function(t){t.target.composing||e.$set(e.form,"code1",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"field-label",attrs:{for:"code2"}},[e._v("Code 2")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.code2,expression:"form.code2"}],staticClass:"form-control",attrs:{type:"text",id:"code1",name:"code2",placeholder:"Code 2"},domProps:{value:e.form.code2},on:{input:function(t){t.target.composing||e.$set(e.form,"code2",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"field-label",attrs:{for:"code3"}},[e._v("Code 3")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.code3,expression:"form.code3"}],staticClass:"form-control",attrs:{type:"text",id:"code1",name:"code3",placeholder:"Code 3"},domProps:{value:e.form.code3},on:{input:function(t){t.target.composing||e.$set(e.form,"code3",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"field-label"},[e._v("Code 4")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.code4,expression:"form.code4"}],staticClass:"form-control",attrs:{type:"text",id:"code1",name:"code4",placeholder:"Code 4"},domProps:{value:e.form.code4},on:{input:function(t){t.target.composing||e.$set(e.form,"code4",t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),o("div",{staticClass:"buttons-row"},[o("NuxtLink",{attrs:{to:"/claim-prize"}},[o("button",{staticClass:"btn btn-primary submit-entry-form"},[e._v("Enter the promotion")])])],1)])])])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"col-sm-6"},[o("div",{staticClass:"card"},[o("img",{attrs:{src:""}}),e._v(" "),o("div",{staticClass:"card-body"},[e._v("\n            Visual of where the codes are (TO BE SUPPLIED)\n          ")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-check"},[o("input",{staticClass:"checkbox-field",attrs:{id:"terms",value:"",type:"checkbox",name:"terms"}}),e._v(" "),o("span",{staticClass:"checkmark"}),e._v(" "),o("label",{staticClass:"label-checkbox",attrs:{for:"terms"}},[e._v("I have read and agree to the"),o("a",{attrs:{href:"terms-conditions.html"}},[e._v("Terms & Conditions")]),e._v(".")])])}],!1,null,null,null);t.default=component.exports}}]);