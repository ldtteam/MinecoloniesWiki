require_relative "filters/require.rb"
require_relative "hooks/require.rb"
require_relative "templates/tags/require.rb"

Liquid::Template.register_filter(Jekyll::WorkerImagesFilter)

Jekyll::Hooks.register :site, :post_read do |*args| Jekyll::WorkerImageHooks.site_post_read(*args) end
Jekyll::Hooks.register :site, :post_write do |*args| Jekyll::WorkerImageHooks.site_post_write(*args) end

Liquid::Template.register_tag("building_link", BuildingLinkTag)
Liquid::Template.register_tag("building", BuildingNameTag)
Liquid::Template.register_tag("worker_link", WorkerLinkTag)
Liquid::Template.register_tag("worker", WorkerNameTag)