module Theme
  class Version
    @major = 1
    @minor = 1
    @tiny  = 0

    class << self
      attr_reader :major, :minor, :tiny

      def to_s
        [@major, @minor, @tiny].compact.join('.')
      end
    end
  end

  VERSION = Version.to_s
end
