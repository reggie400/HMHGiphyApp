export const getShallowRenderedComponent = (component) => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(component);
    return shallowRenderer.getRenderOutput();
};
