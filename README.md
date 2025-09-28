# Checkpoint: Debugging with React Developer Tools

## Issues Found & Fixed

### Issue 1: Missing Prop
- **Description**: The `Profile` component expected a `name` prop, but it was `undefined`.
- **How I found it**: In React DevTools → Components tab → `Profile` → props showed `name: undefined`.
- **Fix**: Passed `name="kamir"` from the parent `App.js`.

### Issue 2: State Not Updating
- **Description**: The counter button wasn’t incrementing.
- **How I found it**: In React DevTools, the `count` state value stayed `0` after clicks.
- **Fix**: Changed `this.state.count++` to `this.setState({ count: this.state.count + 1 })`.

### Issue 3: Unexpected Re-render
- **Description**: Child component re-rendered on every parent change even when props didn’t change.
- **How I found it**: React DevTools → Profiler → saw extra renders.
- **Fix**: Used `React.memo` on the child.

## Verification
- All props now passed correctly.
- Counter increments as expected.
- No unnecessary re-renders.
