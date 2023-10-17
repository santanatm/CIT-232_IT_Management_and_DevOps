import { sayHello, sendName } from "../utils/helloworld.js" ;
import assert from "assert" ;

// Manual testing.
it( "Tests Hello World", () => {
    const hello = sayHello();
    assert.equal( hello, "Hello" );

} );

// Automated Unit Tests.
it( "Should say Hello", () => {
    const myName = sendName();
    console.log( myName );

    expect( myName ).toBe( "Hello" );
} );