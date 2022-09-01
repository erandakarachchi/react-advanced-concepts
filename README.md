# Lazy Loading with React Router

[React Router](https://reactrouter.com/en/main/getting-started/installation#basic-installation)

We can use lazy loading to load the components when we're navigating to the particular route. This will also helps the code splitting and the bundle size.

```js
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </Suspense>

```

`<Suspense>` is needed since the component is loading asynchronously. 
