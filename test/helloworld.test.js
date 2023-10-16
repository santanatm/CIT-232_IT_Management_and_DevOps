import { sayHello } from "../utils/helloworld.js" ;
import assert from "assert" ;

// Manual testing.
it( "Tests Hello World", () => {
    const hello = sayHello();
    assert.equal( hello, "Hello" );
    console.log( hello );
} );

