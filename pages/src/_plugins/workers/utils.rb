class Utils
    def self.getWorkerKey(context, input)
        worker = nil

        page_data = context.registers[:page]
        if page_data["layout"] == "worker"
            worker = page_data["worker"]
        end

        unless input.nil? || input.empty?
            worker = input
        end

        if worker.nil? || worker.empty?
            throw "Worker key could not be resolved from Liquid tag, please provide a worker key"
        end

        return worker
    end

    def self.getWorkerInfo(context, worker)
        if worker.nil? || worker.empty?
            throw "Worker key is not defined"
        end

        workerinfo = context.registers[:site].data["workerinfo"][worker]

        if workerinfo.nil?
            throw "Worker info for worker '#{worker}' does not exist. Please provide a valid worker key."
        end

        return workerinfo
    end
end