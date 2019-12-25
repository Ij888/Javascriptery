let name, height, testsPass, testsFail;
name = "fooobar";
height = "79";
testsPass = 'test status: passed';
testsFail = 'test status: failed';

//tests
if (name === 'foobar'){
    console.log(testsPass);
}else{
    console(testsFail);
}
