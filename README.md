# render-and-commit

In this documentation read, I learnt:

- that UI component rendering process happens in 3 main stages: `triggering`(requesting for UI), `rendering` (creating the UI requested) and `committing` to the DOM (displaying the requested UI on the screen)
- the 2 reasons a component renders (is created): `initial render` when the app starts & when its `state changes` so the component has to rerender and update with the new data
- that rendering basically means that React is calling your components to create JSX
- during a component state change & rerender, React rerenders the component whose state changed and `all its nested components` recursively (i.e. if the parent component returns a component, that will be rendered next & its nested component next like that until all components in the parent component whose state changed are all updated)
