require_relative "../../utils/worker_utils.rb"

module Jekyll
    module WorkerImagesFilter
        def get_worker_images(input, worker, style, className = "")
            site = Jekyll.sites.first
            path = "/assets/images/workers/#{worker}/#{style}/male"
            dest_path = site.dest + path

            # Get all of the source files
            dest_images = Dir.glob(dest_path + '/**/*').select { |path| File.file?(path) }

            # Transform the images into the proper HTML string
            return dest_images.collect do |worker_image|
                worker_info = WorkerUtils.getWorkerInfo(site, worker)

                "<div class='#{className}'><div>" +
                    "<img src='../../assets/images/workers/#{worker}/#{style}/male/#{File.basename(worker_image)}' alt='#{worker_info["name"]} male #{File.basename(worker_image, ".*")}'/></div><div>" +
                    "<img src='../../assets/images/workers/#{worker}/#{style}/female/#{File.basename(worker_image)}' alt='#{worker_info["name"]} female #{File.basename(worker_image, ".*")}'/></div></div>"
            end
        end
    end
end