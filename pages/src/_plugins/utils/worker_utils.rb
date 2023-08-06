class WorkerUtils
    def self.getWorkerKey(page, input)
        worker = nil

        if page["layout"] == "worker"
            worker = page["worker"]
        end

        unless input.nil? || input.empty?
            worker = input
        end

        if worker.nil? || worker.empty?
            throw "Worker key could not be resolved from Liquid tag, please provide a worker key"
        end

        return worker
    end

    def self.getWorkerInfo(site, worker)
        if worker.nil? || worker.empty?
            throw "Worker key is not defined"
        end

        workerinfo = site.data["workerinfo"][worker]

        if workerinfo.nil?
            throw "Worker info for worker '#{worker}' does not exist. Please provide a valid worker key."
        end

        return workerinfo
    end
end