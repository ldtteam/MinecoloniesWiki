require_relative "../base_tag"
require_relative "utils"

class WorkerLinkTag < BaseTag
    def render_tag(context, arguments)
        worker_key = arguments.unkeyed[0]
        worker_plural = arguments.keyed["plural"] ||= false

        worker = Utils.getWorkerKey(context, arguments.unkeyed[0])
        worker_info = Utils.getWorkerInfo(context, worker)
        worker_name = worker_info[worker_plural ? "plural" : "name"]

        if arguments.keyed["class"].nil?
            return "<a href='/source/workers/#{worker}'>#{worker_name}</a>"
        else
            return "<a href='/source/workers/#{worker}' class='#{arguments.keyed["class"]}'>#{worker_name}</a>"
        end
    end
end