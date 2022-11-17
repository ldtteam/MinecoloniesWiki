require_relative "../base_tag"
require_relative "../../../utils/worker_utils"

class WorkerNameTag < BaseTag
    def render_tag(context, arguments)
        worker_key = arguments.unkeyed[0]
        worker_plural = arguments.keyed["plural"] ||= false

        worker = WorkerUtils.getWorkerKey(context.registers[:page], arguments.unkeyed[0])
        worker_info = WorkerUtils.getWorkerInfo(context.registers[:site], worker)
        return worker_info[worker_plural ? "plural" : "name"]
    end
end