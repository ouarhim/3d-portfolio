ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <Navigate to="/404" />
      </RouterProvider>
    </React.StrictMode>,
  )