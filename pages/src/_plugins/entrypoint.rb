require_relative "utils/require"

require_relative "hooks/require"
require_relative "templates/require"

# Liquid template tags
Liquid::Template.register_tag("building_link", BuildingLinkTag)
Liquid::Template.register_tag("building", BuildingNameTag)
Liquid::Template.register_tag("worker_link", WorkerLinkTag)
Liquid::Template.register_tag("worker", WorkerNameTag)