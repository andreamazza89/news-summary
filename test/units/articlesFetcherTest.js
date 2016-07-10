'use strict';

var chai            = require('chai');
var expect          = chai.expect;
var ArticlesFetcher = require('../../app/scripts/articlesFetcher').ArticlesFetcher;
var sinon           = require('sinon');
var sinonChai       = require('sinon-chai');
chai.use(sinonChai);

var mockApi         = sinon.spy();
var articlesFetcher = new ArticlesFetcher(mockApi);

describe('ArticlesFetcher', function() {

  afterEach(function() {
    mockApi.reset(); 
  });

  it('#fetch sends the correct message to the api', function() {

    var search = 'uk'
    
    var searchParams = {
      'show-editors-picks' : 'true',
      'show-fields' : 'body'
    };

    articlesFetcher.fetch(search, searchParams); 
    expect(mockApi).to.have.been.calledWith('https://content.guardianapis.com/uk?show-editors-picks=true&show-fields=body');
  });

}); 
