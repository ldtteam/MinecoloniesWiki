require_relative "../base_tag"
require_relative "utils"

class WorkerNameTag < BaseTag
    def render_tag(context, arguments)
        worker_key = arguments.unkeyed[0]
        worker_plural = arguments.keyed["plural"] ||= false

        worker = Utils.getWorkerKey(context, arguments.unkeyed[0])
        worker_info = Utils.getWorkerInfo(context, worker)
        return worker_info[worker_plural ? "plural" : "name"]
    end
end