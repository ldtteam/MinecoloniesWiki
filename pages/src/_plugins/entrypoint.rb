require_relative "utils/require"

require_relative "filters/require"
require_relative "hooks/require"
require_relative "templates/require"

# Liquid filters
Liquid::Template.register_filter(Jekyll::WorkerImagesFilter)

# Jekyll hooks
Jekyll::Hooks.register :site, :post_read do |*args| Jekyll::WorkerImageHooks.site_post_read(*args) end
Jekyll::Hooks.register :site, :post_write do |*args| Jekyll::WorkerImageHooks.site_post_write(*args) end

# Liquid template blocks
Liquid::Template.register_tag("version", VersionBlock)

# Liquid template tags
Liquid::Template.register_tag("building_link", BuildingLinkTag)
Liquid::Template.register_tag("building", BuildingNameTag)
Liquid::Template.register_tag("worker_link", WorkerLinkTag)
Liquid::Template.register_tag("worker", WorkerNameTag)