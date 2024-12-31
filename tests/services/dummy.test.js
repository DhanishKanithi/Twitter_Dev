 const {execute, helper} = require('../../src/services/dummy-service');
// // NOTE: To use ESModuling, you need to create a Jest config file .babelrc 
// /*
//     {
//       "env": {
//                 "test": {
//                     "plugins": ["@babel/plugin-transform-modules-commonjs"]
//                     }
//             }
//     }

//     Then in babel dependency
//     $ npm install --save-dev jest @babel/plugin-transform-modules-commonjs

//     Then execute
//     $ npm run test

// */

test('result true then return Learning js', () => {
    const mockfun = jest.fn(() => true);
    const result = execute(mockfun);
    expect(result).toBe('Learning JS');
    
})

test('result false then return Learning Reactjs', () => {
    const mockfun = jest.fn(() => false);
    const result = execute(mockfun);
    expect(result).toBe('Learning ReactJS');
    
})













// test("returns undefined by default", () => {
//     const mock = jest.fn();
//     let result = mock("foo");
  
//     expect(result).toBeUndefined();
//     expect(mock).toHaveBeenCalled();
//     expect(mock).toHaveBeenCalledTimes(1);
//     expect(mock).toHaveBeenCalledWith("foo");
//   });






//   test("mock implementation", () => {
//     const mock = jest.fn(() => "bar");
  
//     expect(mock("foo")).toBe("bar");
//     expect(mock).toHaveBeenCalledWith("foo");
//   });
  
//   test("also mock implementation", () => {
//     const mock = jest.fn().mockImplementation(() => "bar");
  
//     expect(mock("foo")).toBe("bar");
//     expect(mock).toHaveBeenCalledWith("foo");
//   });
  
//   test("mock implementation one time", () => {
//     const mock = jest.fn().mockImplementationOnce(() => "bar");
  
//     expect(mock("foo")).toBe("bar");
//     expect(mock).toHaveBeenCalledWith("foo");
  
//     expect(mock("baz")).toBe(undefined);
//     expect(mock).toHaveBeenCalledWith("baz");
//   });
  
//   test("mock return value", () => {
//     const mock = jest.fn();
//     mock.mockReturnValue("bar");
  
//     expect(mock("foo")).toBe("bar");
//     expect(mock).toHaveBeenCalledWith("foo");
//   });
  
//   test("mock promise resolution", () => {
//     const mock = jest.fn();
//     mock.mockResolvedValue("bar");
  
//     expect(mock("foo")).resolves.toBe("bar");
//     expect(mock).toHaveBeenCalledWith("foo");
//   });







//   const doAdd = (a, b, callback) => {
//     callback(a + b);
//   };
  
//   test("calls callback with arguments added", () => {
//     const mockCallback = jest.fn();
//     doAdd(1, 2, mockCallback);
//     expect(mockCallback).toHaveBeenCalledWith(3);
//   });