import { defineComponent, openBlock, createElementBlock, renderSlot, createElementVNode, toDisplayString } from 'vue';

var script = defineComponent({
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
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default"),
    createElementVNode("span", _hoisted_2, toDisplayString(_ctx.title), 1 /* TEXT */)
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

export { script as BIconNav, index as default, install };
