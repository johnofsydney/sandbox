def playlist(songs, k, q)
  result = 0

  i = songs.index q
  n = songs.length

  gap = (i - k).abs

  closest_to_end = [k, i].max
  closest_to_start = [k, i].min

  to_end = n - closest_to_end
  to_start = closest_to_start - 0

  gap_clever = to_end + to_start





  return [gap, gap_clever].min
end

arr = ["wheniseeyouagain", "borntorun", "nothingelsematters", "cecelia"]
p playlist arr, 1, "cecelia"


require 'net/http'
require 'json'
require 'pry'

def getMovieTitles(substr)

  titles = []

  address_one = URI('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr)
  r = Net::HTTP.get(address_one)
  h1 = JSON.parse(r)
  pages = h1["total_pages"]

  while pages > 0 do
    address = URI('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + pages.to_s )
    r = JSON.parse( Net::HTTP.get(address) )
    i = 10
    while ( i >= 0) do
      titles.push ["data"][i]["Title"]
      i = i - 1
    end

    pages = pages - 1
  end

  p titles

end

getMovieTitles("spiderman")

# https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1
# Net::HTTP.get('example.com', '/index.html') # => String
# Net::HTTP.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1') # => String
