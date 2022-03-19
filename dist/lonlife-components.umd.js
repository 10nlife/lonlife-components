(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["lonlife-components"] = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = vue.defineComponent({
      name: 'b-icon-nav',
      props: {
          title: {
              type: String,
              require: true
          }
      }
  });

  const _hoisted_1 = { class: "main-nav" };
  const _hoisted_2 = { class: "title" };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(_ctx.title), 1 /* TEXT */)
    ]))
  }

  script.render = render;
  script.__scopeId = "data-v-2ec11c62";
  script.__file = "src/components/b-icon-nav/b-icon-nav.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script
  ];
  const install = (app) => {
      components.forEach(component => {
          app.component(component.name, component);
      });
  };
  var index = {
      install
  };

  exports.BIconNav = script;
  exports["default"] = index;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
