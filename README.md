# React.lazy

React JS can lazy load the components too.

Lazy components will automatically called when the main component is first rendered.
`React.lazy` will import the default export from the component file

```js
  const HomeComponent = React.lazy(() => import("./HomeComponent"));
  const DashboardComponent = React.lazy(() => import("./DashboardComponent"));
```

`<Suspense>` element needs to be used in order to render lazy loaded components inside another component. also `fallback` element is needed by`<Suspense>` which will be shown until the dynamic component is fully loaded. 

```js
    <div className="App">
      <h2>App Component</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <HomeComponent />
        <DashboardComponent />
      </Suspense>
    </div>
```

Can also add error boundaries to handle issues.

```js
    <div className="App">
      <h2>App Component</h2>
      <SampleErrorBoundary>
        <Suspense fallback={<div>Loading....</div>}>
          <HomeComponent />
          <DashboardComponent />
        </Suspense>
      </SampleErrorBoundary>
    </div>
```
