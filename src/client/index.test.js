import { expect } from 'chai';
import { sandbox as Sandbox } from 'sinon';

const sandbox = Sandbox.create();


describe('Client', function(){
    var fn;

    beforeEach(() => {
        fn = sandbox.stub();
        fn.returns('a working stub!');
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('runs a test, yay!', () => {
        expect(true).to.be.true;
        expect(fn()).to.equal('a working stub!');
    });
});
