Feature('Login');

Before(({ login }) => {
   login('user'); // login using user session
});

// Alternatively log in for one scenario.
Scenario('log me in', ( { I, login } ) => {
   login('suzuki');
   I.see('suzuki');
});