@users.each do |user|
  debugger
  json.partial! "api/users/user", user: user
end
