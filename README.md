# Foxwall Frontend 
![Logo](./images/logo-with-text.png)

This project is frontend implementation of the [Foxwall API](https://github.com/umtdemr/foxwall). If you curious about the API please take a look.

## Screenshots

![Project gif](https://media1.giphy.com/media/rmb8gnVkoibDPhQoNr/giphy.gif?cid=790b7611932a903817f7c158bd82417cbc2a7cd3c5aedaf4&rid=giphy.gif&ct=g)


## Environment Variables

To run this project, you will need to add the following environment variable to your .env file. API URL must has not backslash at the end of the url.

`REACT_APP_API_URL=http://127.0.0.1:8000`



## Run Locally

Before running locally, you may want to run API locally. Check out [Foxwall API](https://github.com/umtdemr/foxwall).

Clone the project

```bash
  git clone https://github.com/umtdemr/foxwall-frontend
```

Go to the project directory

```bash
  cd foxwall-frontend
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Blaze Orange | ![#FF6600](https://via.placeholder.com/10/FF6600f?text=+) #FF6600 |
| Razzmatazz | ![#F50057](https://via.placeholder.com/10/F50057?text=+) #F50057 |
| Black Squeeze | ![#F1F5FA](https://via.placeholder.com/10/F1F5FA?text=+) #F1F5FA |
| Cod Gray | ![#121212](https://via.placeholder.com/10/121212?text=+) #121212 | 
| Mine Shaft | ![#242323](https://via.placeholder.com/10/242323?text=+) #242323 | 



## Lessons Learned

I've learned a lot from this project. 

- It's so hard to use MUI with typescript and react if your pc is old. Especially type checking after save has been annoying. But with a powerful computer (I've started to use M1 Macbook air at this point) it is not a big problem.
- Using UI library can be very constraint. Sometimes I took a long time to make even small changes. But the benefits that UI library brings can not be ignored. Because there are many ton of beautiful components ready to use.
- Writing tests in side project is discouraging. When I was started to this project, I was thinking about writing tests for each component. But I considered that takes a lot of time. So it is so discouraging. Even if you create basic component, there were being too much things to do after it.
- Redux toolkit is so easy to use. Being honest; I've always scared from redux. But with Redux Toolkit, state management is becoming so easy.
- Using asyncThunk on API calls is time saver. Redux toolkit comes with built-in Thunk middleware. For that reason I tried it and I loved it after using it in many API calls. It's working great with slices and of course states. 


## Related

Here are some related projects

[Foxwall API](https://github.com/umtdemr/foxwall)


## License

[MIT](https://choosealicense.com/licenses/mit/)



## TO DO

- [x] Should customize theme more.
- [x] Fix bio issue after registiration
- [x] Create global message state management
- [x] Correct auth messages
- [x] Clear images and text after uploading post
- [x] Sidebar requests
- [x] Fix wrong follow status on decline or accept
- [x] Add edit profile feature
- [x] Fix search case insensitive issue
- [x] Fetch profile and edit profile data on page components
- [x] Fix issue of updating username...
- [x] Fix changeIsCameFollowRequest issue 
- [x] Add left sidebar
- [x] Fix Responsive issues 
- [x] Finish mobile nav
- [ ] Deploy app


