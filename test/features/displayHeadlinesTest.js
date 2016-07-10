'use strict';

var expect             = require('chai').expect;
var articlesFetcher    = require('../../app/scripts/articlesFetcher ');
const Browser          = require('zombie');
const app              = require('../../app/server');

//As a busy politician
//I can see all of today's headlines in one place
//So I know what the big stories of the day are

describe('Display headlines', function() {
  
  var browser;

  before(function(done) {

    var searchParams = {
      'search' : 'uk',
      'show-editors-picks' : 'true',
      'show-fields' : 'body'
    }

    var articles = articlesFetcher.fetch(searchParams);
    browser = new Browser({site: 'http://localhost:3000'});
    browser.visit('/', done);
  });

  it('user can see the first of the headlines sent by the api', function() {
    expect(browser.text()).to.contain('News summary');
  });
});
