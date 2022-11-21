require_relative "buildings/building_name"
require_relative "buildings/building_link"

require_relative "workers/worker_name"
require_relative "workers/worker_link"

Liquid::Template.register_tag("building", BuildingNameTag)
Liquid::Template.register_tag("building_link", BuildingLinkTag)
Liquid::Template.register_tag("worker", WorkerNameTag)
Liquid::Template.register_tag("worker_link", WorkerLinkTag)

require_relative "templates/tags/util/version"
Liquid::Template.register_tag("version", VersionBlock)